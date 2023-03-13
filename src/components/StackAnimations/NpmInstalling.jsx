import styled from 'styled-components';
export default function InstallPack({status}){
    return(
        <Package appear={status}>
            NPM install [...]
        </Package>
    )
}

const Package=styled.div`
     height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    outline: 2px solid black;
    visibility: ${(props)=>props.appear};

`