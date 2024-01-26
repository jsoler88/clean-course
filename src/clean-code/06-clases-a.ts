(() => {
    // No aplica el principio de responsabilidad unica
    type Gender = 'F' | 'M' | 'O';



    class Person {
        constructor(
            public name: string,
            public gender: Gender,
            public birthdate: Date
        ) {
        }
    }

    class User extends Person {
        public lastAccess: Date;

        constructor(
            public email: string,
            public role: string,
            name: string,
            gender: Gender,
            birthdate: Date
        ) {
            super(name, gender, birthdate);
            this.lastAccess = new Date();
        }
    }

    class UserSettings extends User {
        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,
            email: string,
            role: string,
            name: string,
            gender: Gender,
            birthdate: Date
        ) {
            super(
                email,
                role,
                name,
                gender,
                birthdate);
        }
    }

    const newUserSettings = new UserSettings(
        '/usr/home',
        '/home',
        'jhonsoler@gmail.com',
        'Admin',
        'Jhon',
        'M',
        new Date('1999-02-04')
    );
    console.log(newUserSettings);
})();
