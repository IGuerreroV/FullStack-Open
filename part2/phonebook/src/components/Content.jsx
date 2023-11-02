import Part from "./Part";

/* Comentario:** Importamos el componente 'Part' que se utilizara para mostrar la informacion de cada parte del curso  */
const Content = ({ courses }) => {

    // **Comentario:** La funcion 'map()' se utiliza para iterar sobre la lista de cursos y calcular la suma total de ejercicios para cada curso.
    // **Comentario:** La funcion 'reduce()' se utiliza para calcular la suma total de los elementos de la lista
    const totalExercisesCourses = courses.map((course) => course.parts.reduce((total, part) => total + part.exercises, 0));


    /** **Comentario:** '.map()' itera sobre la lista de cursos y renderiza un elemento div con el nombre del curso para cada curso
     * - Course: El elemento actual de la lista de cursos
     * - Index: El indice del elemetno actual en la lista de cursos
    */

    /** **Comentario:** '.map()' itera sobre la lista de partes del cursos y renderiza un componente 'Part' para cada parte
     * - 'totalExercisesCourses[index]`: Este es el total de ejercicios para el curso actual. El índice del curso se utiliza para acceder al total de ejercicios correcto para el curso actual.
    */

    return (
        <div>
        {courses.map((course, index) => (
            <div key={course.id}>
                <h2>{course.name}</h2>
                {course.parts.map((part, index) => (
                <Part key={part.id} part={part} />
                ))}
                <h3>total of {totalExercisesCourses[index]} exercises</h3>
            </div>
        ))}
    </div>
    );
};

export default Content;