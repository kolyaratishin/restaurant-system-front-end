import classes from "./SearchMealInput.module.css";

const SearchMealInput = (props) => {
    return (
        <div>
            <p className={classes.search_caption}>
                Пошук по назві
            </p>
            <input className={classes.search_input} onChange={props.onChange} type="text" placeholder="Ведіть назву страви"/>
        </div>
    );
}

export default SearchMealInput;