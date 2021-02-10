const app = {
    data() {
        return {
            tasks: [{
                title: 'Lisa', detail: 'Lalisa Manoban (birth name: Pranpriya Manoban, born March 27, 1997 in Bangkok, Thailand) better known by her stage name, Lisa, is a Thai rapper, singer and dancer, based in South Korea. She is a member of Blackpink.',
                  url: './images/1.jpg', done: false ,count: 199},
            { title: 'Jennie', detail: "She is the only child in their family. At a height of 5'3 ft (that is 163 cm) and weighing only 41 kgs, Jennie is probably one of the sexiest and most petite idols right now. She also has a lovely, small face. She can play the piano, as well as the flute.", 
                  url: './images/2.jpg', done: false ,count: 247},
            { title: 'Jisoo', detail: "The oldest member in the group, Jisoo is a singer, often referred to as Blackpink's mood-maker. She has a quirky sense of humor and a proclivity for generating on-the-spot songs about any topic — from the weather to a craving for chicken skewers.", 
                  url: './images/3.jpg', done: false ,count: 234},
            { title: 'Rose', detail: "Rose is the group's lead dancer and is also known for her unique, dreamy voice. She has an ability to hit high notes easily while performing extreme dance moves on the stage – something even veteran K-pop artists cannot always manage.", 
                  url: './images/4.jpg', done: false ,count: 542},
            ]
        
        }

    },
    methods: {
        toggleDone(index){
            if (this.tasks[index].done) {
                this.tasks[index].done = !this.tasks[index].done
                this.tasks[index].count -= 1
            }else
            {
                this.tasks[index].done = !this.tasks[index].done
                this.tasks[index].count += 1
            }
        }
    },
    computed: {
        countLike(){
            return this.tasks.filter( i => i.done).length
        },
        countPic(){
            return this.tasks.filter( i => i).length
        }
    }

}
mountedApp = Vue.createApp(app).mount('#app')

