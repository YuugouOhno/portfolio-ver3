export const requestIdle = (
    cb: IdleRequestCallback,
    options?: IdleRequestOptions
  ): number => {
    if ('requestIdleCallback' in window) {
      return window.requestIdleCallback(cb, options);
    } else {
      const id = setTimeout(() => cb({
        didTimeout: false,
        timeRemaining: () => 0,
      }), 1);
      return id as unknown as number;
    }
  };
  
  export const cancelIdle = (id: number) => {
    if ('cancelIdleCallback' in window) {
      window.cancelIdleCallback(id);
    } else {
      clearTimeout(id);
    }
  };