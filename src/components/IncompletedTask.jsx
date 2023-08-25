const IncompletedTask = ({data}) => {
   const {id, clientName, assignedBy, taskDescription, assignedTo, date, comment} = data; 
    return (
        <div>
            <h1>this is how we go {id}</h1>
        </div>
    );
};

export default IncompletedTask;