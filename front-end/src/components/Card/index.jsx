import { StyledCard, StyledMovieDescription, StyledMovieTitle, StyledTagWrapper } from "./styles";
import { Stars } from '../Stars';
import { Tag } from '../Tag';
import { Button } from "../Button";

const mocked = {
    title: 'Interestelar',
    description: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand. O cientista revela que um buraco de minhoca foi aberto perto de Saturno e que ele leva a planetas que podem oferecer condições de sobrevivência para a espécie humana. As "missões Lázaro" enviadas anos antes identificaram três planetas potencialmente habitáveis orbitando o buraco negro Gargântua: Miller, Edmunds e Mann – nomeados em homenagem aos astronautas que os pesquisaram. Brand recruta Cooper para pilotar a nave espacial Endurance e recuperar os dados dos astronautas; se um dos planetas se mostrar habitável, a humanidade irá seguir para ele na instalação da NASA, que é na realidade uma enorme estação espacial. A partida de Cooper devasta Murphy.',
    tags: [
        {
            id: 0,
            name: 'Ficção científica',
        },
        {
            id: 1,
            name: 'Drama',
        },
        {
            id: 2,
            name: 'Familia',
        },
    ],
};

export const Card = ({
    data = mocked,
}) => {
    return (
        <StyledCard>
            <StyledMovieTitle>
                <Button
                    text={data.title}
                    isLink
                    noBackground
                    noPadding
                    style={{color: 'white'}}
                    to={`/movie/view/${data.id}`}
                />
            </StyledMovieTitle>
            <Stars rating={data.rating} />
            <StyledMovieDescription>
               {data.description}
            </StyledMovieDescription>
            <StyledTagWrapper>
                {data.tags?.map(tag => (
                    <Tag name={tag.name} />
                ))}
            </StyledTagWrapper>
        </StyledCard>
    );
}