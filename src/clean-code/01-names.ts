(() => {

    // Ejemplo
    // Archivos a evaluar - files to evaluate
    const filesToEvaluate = [
        { id: 1, isFile: false },
        { id: 2, isFile: false },
        { id: 3, isFile: true },
        { id: 4, isFile: false },
        { id: 5, isFile: false },
        { id: 7, isFile: true },
    ];

    // Archivos marcados para borrar - files to delete
    const files = filesToEvaluate.map( file => file.isFile );

    // Malos nombres
    class AbstractUser { };
    class UserMixin { };
    class UserImplementation { };
    interface IUser { };

    // Mejor
    class User { };
    interface User { };


    // día de hoy - today
    const today = new Date();

    // días transcurridos - elapsed time in days
    const elapsedTimeInDays: number = 23;

    // número de archivos en un directorio - number of files in directory
    const numberOfFilesInDirectory = 33;

    // primer nombre - first name
    const name = 'Fernando';

    // primer apellido - last name
    const lastName = 'Herrera';

    // días desde la última modificación - days since modification
    const daysSinceModification = 12;

    // cantidad máxima de clases por estudiante - max classes per student
    const maxClassesPerStudent = 6;

    console.log('0. ', files);
    console.log('1. ', filesToEvaluate);
    console.log('2. ', today);
    console.log('3. ', elapsedTimeInDays);
    console.log('4. ', numberOfFilesInDirectory);
    console.log('5. ', name);
    console.log('6. ', lastName);
    console.log('7. ', daysSinceModification);
    console.log('8. ', maxClassesPerStudent);


})();
