// Normalize an image reference to a URL string.
//
// In Astro, importing an image (png/jpg/etc.) yields an ImageMetadata object
// ({ src, width, height, format }) rather than the bare URL string CRA produced.
// Content files pass those imports straight through, so components that render
// them need to accept either shape.
export function imgSrc(image) {
  if (!image) return "";
  return typeof image === "string" ? image : image.src;
}
