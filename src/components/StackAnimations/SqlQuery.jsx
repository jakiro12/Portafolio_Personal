import styled from 'styled-components';
export default function QueryShow({status}){
    return(
        <QuerySelector appear={status}>
           SELECT * FROM users WHERE email = ‘xxx@xxx.xxx’ AND password = md5(‘xxx’) OR 1 = 1 — ]’);
        </QuerySelector>
    )
}
const QuerySelector=styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
   // outline: 2px solid black;
    text-align: center;
    padding-left: 2%;
    padding-right: 2%;
    visibility: ${(props)=>props.appear};
` 