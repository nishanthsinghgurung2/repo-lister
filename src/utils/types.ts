export type Node = {
    forkCount: number;
    url: string;
    stargazerCount: number;
};

export type Edge = {
    node: Node
};