export class EventDTO {
    uuid: string;
    title: string;
    image: string;
    desc: string;
    location: string;
    time: string;
    date: string;
    age: string;

    constructor(uuid: string, title:string, image:string, desc: string, location:string, time:string, date:string, age: string) {
        this.uuid = uuid;
        this.title = title;
        this.image = image;
        this.desc = desc;
        this.location = location;
        this.time = time;
        this.date = date;
        this.age = age;
    }

}