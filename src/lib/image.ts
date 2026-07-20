export function resolveImageSource(source: string) {
  if (!source) {
    return ''
  }

  const fileMatch = source.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/)
  if (fileMatch) {
    return `https://drive.google.com/thumbnail?id=${fileMatch[1]}&sz=w1600`
  }

  const openMatch = source.match(/[?&]id=([a-zA-Z0-9_-]+)/)
  if (source.includes('drive.google.com') && openMatch) {
    return `https://drive.google.com/thumbnail?id=${openMatch[1]}&sz=w1600`
  }

  return source
}

export function extractGoogleDriveFileId(source: string) {
  const fileMatch = source.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/)
  if (fileMatch) {
    return fileMatch[1]
  }

  const openMatch = source.match(/[?&]id=([a-zA-Z0-9_-]+)/)
  return openMatch?.[1] ?? ''
}