import TodoItem from './Todo'

export default function TodoView(props) {
	const columns = [

        // {
        //     title: 'id',
        //     dataIndex: 'id',
        //     key:'id',
        // },
        {
            title: 'title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'description',
            dataIndex: 'description',
            key: 'description',
        },
    ];
    return (
        <div>
            <tr>
                {props.todoList.map(todo => <TodoItem todo={todo} />)}
            </tr>
        </div>
    )
}