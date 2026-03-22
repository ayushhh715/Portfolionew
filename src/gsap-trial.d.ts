declare module "gsap-trial/SplitText" {
  export class SplitText {
    chars: any[];
    words: any[];
    lines: any[];
    constructor(target: any, vars?: any);
    revert(): void;
    split(vars?: any): void;
  }
}

declare module "gsap-trial/ScrollSmoother" {
  export class ScrollSmoother {
    static create(vars?: any): ScrollSmoother;
    static refresh(hard?: boolean): void;
    paused(value?: boolean): any;
    scrollTo(target: any, smooth?: boolean, position?: string): void;
    scrollTop(value?: number): any;
    kill(): void;
  }
}
