type PointDto = [number, number, number]

const POSITION_X = "position.x"
const POSITION_Y = "position.y"
const POSITION_Z = "position.z"

const DIMENSIONS_X = "dimensions.x"
const DIMENSIONS_Y = "dimensions.y"
const DIMENSIONS_Z = "dimensions.z"

const CUBOIDS_SIBLING_ID = "cuboids.sibling_id"
const CUBOIDS_SENSOR_ID = "cuboids.sensor_id"


type CuboidDto = {
    uuid: string;
    label: string;
    stationary: boolean;
    camera_used: number;
    [POSITION_X]: number;
    [POSITION_Y]: number;
    [POSITION_Z]: number;
    yaw: number;
    [DIMENSIONS_X]: number;
    [DIMENSIONS_Y]: number;
    [DIMENSIONS_Z]: number;
    [CUBOIDS_SIBLING_ID]: string;
    [CUBOIDS_SENSOR_ID]: number;
}

type FrameDto = {
    frame_id: number;
    points: PointDto[];
    cuboids: CuboidDto[];
}

export type Frame = {
    frameId: number;
    points: Point[];
    cuboids: Cuboid[];
}

export type Point = {
    x: number;
    y: number;
    z: number;
}

export type Dimension = Point

export type Cuboid = Pick<CuboidDto, "uuid" | "label" | "yaw" | "stationary"> & {
    cameraUsed: number;
    position: Point;
    dimensions: Dimension;
    siblingId: string;
    sensorId: number;
}

class FramesApiClient {
    private baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    async get(frame: number): Promise<Frame> {
        if (frame < 0 || frame > 49) {
            throw Error("Invalid frame number");
        }

        const frameId = frame < 10 ? `0${frame}` : frame.toString();

        const response = await fetch(`${this.baseUrl}/frame_${frameId}.json`);

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        const body = await response.json() as FrameDto;

        return ({
            frameId: body.frame_id,
            points: body.points.map((pointDto) => ({ x: pointDto[0], y: pointDto[1], z: pointDto[2] })),
            cuboids: body.cuboids.map((cuboidDto) => ({
                uuid: cuboidDto.uuid,
                label: cuboidDto.label,
                yaw: cuboidDto.yaw,
                stationary: cuboidDto.stationary,
                cameraUsed: cuboidDto.camera_used,
                position: { x: cuboidDto[POSITION_X], y: cuboidDto[POSITION_Y], z: cuboidDto[POSITION_Z] },
                dimensions: { x: cuboidDto[DIMENSIONS_X], y: cuboidDto[DIMENSIONS_Y], z: cuboidDto[DIMENSIONS_Z] },
                siblingId: cuboidDto[CUBOIDS_SIBLING_ID],
                sensorId: cuboidDto[CUBOIDS_SENSOR_ID]
            }))
        });
    }
}

export const framesApiClient = new FramesApiClient("https://static.scale.com/uploads/pandaset-challenge")