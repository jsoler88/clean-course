(() => {

    const temperaturesCelsius = [33.6, 12.34];
    const serverIp = '123.123.123.123';

    const userList = [{id: 1, email: 'fernando@google.com'},{ id: 2, email: 'juan@google.com' }, { id: 3, email: 'melissa@google.com' }];
    const emailsList = userList.map( user => user.email );

    const canJump = false;
    const canRun = true;
    const hasItems = true;
    const isLoading = false;

    const startTime = new Date().getTime();
    //....
    // 3 doritos después
    //...
    const endTime = new Date().getTime() - startTime;

    function getBook() {
        throw new Error('Function not implemented.');
    }

    function getBooksByUrl( url: string) {
        console.log(url);
        throw new Error('Function not implemented.');
    }

    function getSquareArea( side: number ) {
        console.log(side);
        throw new Error('Function not implemented.');
    }

    function printJob() {
        throw new Error('Function not implemented.');
    }
})();
