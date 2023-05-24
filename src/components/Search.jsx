import { useState } from 'react';
import { Grid ,Form, Input} from 'semantic-ui-react';




const Search = ({setSearchedQuery}) => {
    const [value, setValue] = useState("");

    const onFormSubmit = () => {
        setSearchedQuery(value);
    }

    return (
        <Grid coloum={2} textAlign='center' className='search-box' >
            <Grid.Column>
                <h2 className='search-heading'>Search Recipes with <span style={{ color: 'orange' }}>our Recipe</span></h2>
                <h4>Input Recipes separated by comma</h4>
                <Form onSubmit={onFormSubmit} >
                        <Input placeholder="tomato,potato,pizza" action={{icon : 'search' , color: 'orange'}} onChange={(e)=>setValue(e.target.value)} value = {value} />
                </Form>
            </Grid.Column>

        </Grid>
    )
}


export default Search;