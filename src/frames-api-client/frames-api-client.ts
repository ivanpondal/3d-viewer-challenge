type PointDto = [number, number, number]

type FrameDto = {
    frame_id: number;
    cuboids: any;
    points: PointDto[];
}

export type Frame = {
    frameId: number;
    points: Point[];
}

export type Point = {
    x: number;
    y: number;
    z: number;
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
            points: body.points.map((pointDto) => ({ x: pointDto[0], y: pointDto[1], z: pointDto[2] }))
        });
    }
}

export const framesApiClient = new FramesApiClient("https://static.scale.com/uploads/pandaset-challenge")