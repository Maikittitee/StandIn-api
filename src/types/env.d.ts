declare global {
    namespace NodeJS {
        interface ProcessEnv {
            ATLAS_URI: string;
            JWT_SECRET: string;
            PORT?: string;
        }
    }
}

export {}