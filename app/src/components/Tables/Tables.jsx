import Table from "./Table/Table";

function Tables(props) {
    let tables = props.tables;
    return (
        <div>
            {tables.map(table => <Table name={table.name} status={table.status}/>)}
        </div>
    );
}

export default Tables;