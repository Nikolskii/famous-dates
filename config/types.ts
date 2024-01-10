export interface BuildPaths {
  entry: string;
  html: string;
  public: string;
  output: string;
  src: string;
}

type BuildMode = 'development' | 'production';

export interface EnvVariables {
  mode?: BuildMode;
  port?: number;
}

export interface BuildOptions {
  port: number;
  paths: BuildPaths;
  mode: BuildMode;
}
