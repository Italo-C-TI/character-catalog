import { Icon } from "components/Icon";
import { Character } from "models";
import { like, inactiveLike, closeOptions } from "assets/icons";
import { CharacterDetailModalProps } from "./CharacterDetailModal.types";
import * as Styled from "./CharacterDetailModal.styles";

export const CharacterDetailModal = ({
  character,
  isLiked,
  hideModal,
  handleLike,
}: CharacterDetailModalProps) => {
  const liked = isLiked ? like : inactiveLike;

  return (
    <Styled.BackgroundModal>
      <Styled.Modal>
        <Styled.CloseModal src={closeOptions} onClick={hideModal} />
        <Styled.Picture src={character.image} />
        <Styled.Strong>{character.name}</Styled.Strong>
        <Styled.Light>
          Is alive?{" "}
          <Styled.Emphasis>{character.status.toUpperCase()}</Styled.Emphasis>
        </Styled.Light>

        <Styled.Text>
          Gender <Styled.Badge>{character.gender}</Styled.Badge>
        </Styled.Text>

        <Styled.Text>
          Location <Styled.Badge>{character.location?.name}</Styled.Badge>
        </Styled.Text>

        <Styled.Text>
          Species <Styled.Badge> {character.species}</Styled.Badge>
        </Styled.Text>

        <Styled.Liked src={liked} onClick={() => handleLike(character.id)} />
      </Styled.Modal>
    </Styled.BackgroundModal>
  );
};
