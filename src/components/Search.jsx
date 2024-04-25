import { MdSearch } from "react-icons/md"

function Search (){
    return (
<div className="search">
    <MdSearch className="search-icons" size="1.3rem"/>
    <input type="text" placeholder="Tapez un mot clé" />
</div>
    )
}

export default Search