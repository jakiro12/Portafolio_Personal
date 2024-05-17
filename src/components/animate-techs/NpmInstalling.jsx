import styled,{ keyframes} from 'styled-components';
export default function InstallPack({status}){
    return(
        <Package appear={status}>
         &#91; <span className='bar'></span>... &#93; <span className='percent'>&#37; installing packages</span>
        </Package>
    )
}
const rotate=keyframes`
    0%{
        opacity: 1;
    }
    50%{
        opacity: 0;
        }
    100%{
        opacity: 1;
}
`
const Package=styled.div`
    height: 100%;
    width: 100%;
    background-color: #3c3c43;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    font-size: 20px;
    visibility: ${(props)=>props.appear};
    .bar{
        width: 50px;
        height: 18px;
        margin-left: 5px;
        margin-right: 5px;
      
        background-color: white;
    }
    .percent{
        animation: ${rotate} 0.7s infinite ;
        margin-left: 5px;
        margin-right: 5px;

    }
`