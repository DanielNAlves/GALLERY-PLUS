import Container from "../components/container";
import AlbumsFilter from "../context/albums/components/albums-filter";
import useAlbums from "../context/albums/hooks/use-albums";

import Photolist from "../context/photos/components/photos-list";
import usePhotos from "../context/photos/hooks/use-photos";

export default function PageHome() {
  const { albums, isLoadingAlbums } = useAlbums();
  const { photos, isLoadingPhotos } = usePhotos();

  return (
    <Container>
      <AlbumsFilter
        albums={albums}
        loading={isLoadingAlbums}
        className="mb-9"
      />
      <Photolist photos={photos} loading={isLoadingPhotos} />
    </Container>
  );
}
