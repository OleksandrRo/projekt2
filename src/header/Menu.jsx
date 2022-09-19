import { MenuStyled } from "../App.styled"
import { ListMenu } from "./ListMenu";



export const Menu = ({ recipes, setRecipes, allList, setAllList, loading, setLoading, isVisible }) => {
    return <MenuStyled isVisible={isVisible}>
        <ListMenu recipes={recipes} allList={allList} loading={loading} setAllList={setAllList} setRecipes={setRecipes} setLoading={setLoading} />
    </MenuStyled>
};