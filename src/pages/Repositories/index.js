import React, { useEffect, useState } from 'react';
import * as S from './styled';
import { useNavigate } from 'react-router-dom';

/*useEffect + useState ok */
export default function Repositories() {
    const history = useNavigate()
    const [ repositories, setRepositories ] = useState([]);

    useEffect(() =>{
        let repositoriesName = localStorage.getItem('repositoriesName');
        if(repositoriesName != null) {
            repositoriesName = JSON.parse(repositoriesName);
            setRepositories(repositoriesName);
            localStorage.clear();
        } else {
            console.log("aaaaaaaa")
            history('/');  //useHistory está outdated, agr usamos o useNavigate > não precisa do .push
        }
    }, []);
    return (
        <S.Container>
            <S.Title>Repositórios</S.Title>
            <S.List>
                { repositories.map(repository => {
                    return (
                        <S.ListItem>Repositório: { repository }</S.ListItem>
                    )
                })}
            </S.List>
            <S.LinkHome to='/'>Voltar</S.LinkHome>
        </S.Container>
    )
}