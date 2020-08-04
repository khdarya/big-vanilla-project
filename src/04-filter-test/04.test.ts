test("should take old men older then 90", ()=> {
    const ages = [12,20,22,1,100,9,14];

    const predicate = (age: number) => age > 90; //posle strelki eto return

    const oldAges = ages.filter(predicate);
    // const oldAges = ages.filter(age => age > 90)

    expect(oldAges.length).toBe(1); //propustit' odnogo 100
    expect(oldAges[0]).toBe(100);
})

test("should take courses cheaper then 160", ()=> {
    const courses = [
        {title: "CSS", price: 110},
        {title: "JS", price: 200},
        {title: "REACT", price: 150}
        ]

    const cheapPredicate = (course: CourseType) => {
        return course.price < 160;
    }
    const cheapCourses = courses.filter(cheapPredicate);
    // ili const cheapCourses = courses.filter(course => course.price < 160)

    expect(cheapCourses.length).toBe(2); //propustit' odnogo 100
    expect(cheapCourses[0].title).toBe("CSS");
    expect(cheapCourses[1].title).toBe("REACT");
})

test ("get only completes tasks", () => {
    const tasks = [
        {id: 1, title: "Bread", isDone: false},
        {id: 2, title: "Milk", isDone: true},
        {id: 3, title: "Solt", isDone: false},
        {id: 4, title: "Sugar", isDone: true},
    ]

    const completedTasks = tasks.filter( task => task.isDone)

  /*  const completedTasks = tasks.filter(function (task) {
        return task.isDone
    })
*/
    expect(completedTasks.length).toBe(2); //propustit' odnogo 100
    expect(completedTasks[0].id).toBe(2);
    expect(completedTasks[1].id).toBe(4);
})

test ("get only completes tasks", () => {
    const tasks = [
        {id: 1, title: "Bread", isDone: false},
        {id: 2, title: "Milk", isDone: true},
        {id: 3, title: "Solt", isDone: false},
        {id: 4, title: "Sugar", isDone: true},
    ]

    //const uncompletedTasks = tasks.filter( task => task.isDone)



    const completedTasks = tasks.filter((task) => !task.isDone)


    expect(completedTasks.length).toBe(2); //propustit' odnogo 100
    expect(completedTasks[0].id).toBe(1);
    expect(completedTasks[1].id).toBe(3);
})