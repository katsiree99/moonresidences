const API_KEY = useRuntimeConfig().public.GDRIVE_API_KEY;
const FOLDER_ID = useRuntimeConfig().public.GDRIVE_FOLDER_ID;

interface DriveImage {
  id: string;
  name: string;
  thumbnailLink: string;
  webContentLink: string;
}

interface GDriveResponse {
  files: DriveImage[];
  nextPageToken?: string;
}

export const useDriveImages = async (
  pageToken = ""
): Promise<GDriveResponse> => {
  const query = `'${FOLDER_ID}' in parents and mimeType contains 'image/' and trashed = false`;
  const url = `https://www.googleapis.com/drive/v3/files?q=${encodeURIComponent(
    query
  )}&key=${API_KEY}&fields=files(id,name,thumbnailLink,webContentLink),nextPageToken&pageSize=30${
    pageToken ? `&pageToken=${pageToken}` : ""
  }`;

  const { data } = await useFetch(url);
  return data.value as GDriveResponse;
};
