const loadedUrls = new Set<string>();
const loadingPromises = new Map<string, Promise<void>>();

export function isImageLoaded(url: string): boolean {
  return loadedUrls.has(url);
}

export function preloadImage(url: string): Promise<void> {
  if (!url) return Promise.resolve();
  if (loadedUrls.has(url)) return Promise.resolve();

  const existing = loadingPromises.get(url);
  if (existing) return existing;

  const promise = new Promise<void>((resolve) => {
    const img = new Image();
    const finish = () => {
      loadedUrls.add(url);
      resolve();
    };
    img.onload = finish;
    img.onerror = finish;
    img.src = url;
    if (img.complete) finish();
  }).finally(() => {
    loadingPromises.delete(url);
  });

  loadingPromises.set(url, promise);
  return promise;
}

export function preloadImages(urls: string[]): void {
  urls.forEach((url) => {
    void preloadImage(url);
  });
}
