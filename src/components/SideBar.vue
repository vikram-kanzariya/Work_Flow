<template>
  <div>
    <div class="flex h-screen">
      <!-- sidebar -->
      <div class="hidden md:flex flex-col w-64 bg-gray-800">
        <div class="flex items-center justify-center h-16">
          <span class="text-white font-bold uppercase">Sidebar</span>
        </div>
        <div class="flex flex-col flex-1 overflow-y-auto">
          <nav class="flex-1 px-2 py-4 bg-gray-800">
            <!-- Email Task -->
            <a
              class="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700"
              @click="addEmailTask($event)"
              :id="'email_task' + count"
            >
              <svg
                class="h-7 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
                />
              </svg>
              Email-Task
            </a>

            <!-- Redirect Task -->
            <a
              class="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
              @click="addRedirectTask"
            >
              <svg
                class="h-7 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  d="M227.7 11.7c15.6-15.6 40.9-15.6 56.6 0l216 216c15.6 15.6 15.6 40.9 0 56.6l-216 216c-15.6 15.6-40.9 15.6-56.6 0l-216-216c-15.6-15.6-15.6-40.9 0-56.6l216-216zm87.6 137c-4.6-4.6-11.5-5.9-17.4-3.5s-9.9 8.3-9.9 14.8l0 56-64 0c-35.3 0-64 28.7-64 64l0 48c0 13.3 10.7 24 24 24s24-10.7 24-24l0-48c0-8.8 7.2-16 16-16l64 0 0 56c0 6.5 3.9 12.3 9.9 14.8s12.9 1.1 17.4-3.5l80-80c6.2-6.2 6.2-16.4 0-22.6l-80-80z"
                />
              </svg>

              Redirect-Task
            </a>
          </nav>
        </div>
      </div>

      <!-- Main content -->
      <div class="flex flex-col flex-1 overflow-y-auto">
        <div
          class="flex items-center justify-between h-16 bg-white border-b border-gray-200"
        >
          <div class="flex items-center pr-4">
            <button
              class="flex items-center text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
            ></button>
          </div>
        </div>
        <div class="p-4">
          <!------- Main-Page-Content --------->

          <!-- START-Task-Content -->
          <div
            class="start border: 1px solid black; height: 110px; width: 110px; border-radius: 50%; text-align: center;"
          >
            <h3>START</h3>

            <svg
              class="play h-10 ml-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path
                d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"
              />
            </svg>

            <div class="action flex m-1">
              <svg
                @click="editStartTask"
                class="h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"
                />
              </svg>

              <svg
                @click="deleteStartTask"
                class="h-4 ml-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"
                />
              </svg>
            </div>
          </div>

          <!-- Email-Task-Content -->
          <div
            v-for="(email, index) in emailTask"
            :key="email"
            class="emailtask border: 1px solid black; height: 110px; width: 110px; border-radius: 50%; text-align: center;"
          >
            <h3>EMAIL</h3>

            <svg
              class="emailicon h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
              />
            </svg>

            <div class="action flex m-1">
              <button
                :id="email.id + index"
                class="editbtn"
                @click="editEmailTask"
              >
                <img src="../assets/edit.png" alt="edit" class="h-4 w-4" />
              </button>

              <svg
                class="h-4 ml-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"
                />
              </svg>
            </div>
          </div>

          <!-- Redirect Task -->
          <div
            v-for="(data, index) in redirectTask"
            :key="data"
            :v-model="data"
            class="redirecttask border: 1px solid black; height: 110px; width: 110px; border-radius: 50%; text-align: center;"
          >
            <h3>REDIRECT</h3>
            <svg
              class="redirecticon h-10 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                d="M227.7 11.7c15.6-15.6 40.9-15.6 56.6 0l216 216c15.6 15.6 15.6 40.9 0 56.6l-216 216c-15.6 15.6-40.9 15.6-56.6 0l-216-216c-15.6-15.6-15.6-40.9 0-56.6l216-216zm87.6 137c-4.6-4.6-11.5-5.9-17.4-3.5s-9.9 8.3-9.9 14.8l0 56-64 0c-35.3 0-64 28.7-64 64l0 48c0 13.3 10.7 24 24 24s24-10.7 24-24l0-48c0-8.8 7.2-16 16-16l64 0 0 56c0 6.5 3.9 12.3 9.9 14.8s12.9 1.1 17.4-3.5l80-80c6.2-6.2 6.2-16.4 0-22.6l-80-80z"
              />
            </svg>

            <div class="action flex m-1">
              <svg
                class="h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                @click="editRedirect"
              >
                <path
                  d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"
                />
              </svg>

              <svg
                class="h-4 ml-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                @click="deleteRedirectTask(index)"
              >
                <path
                  d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"
                />
              </svg>
            </div>
          </div>
        </div>

        <!-- Edit Start-Task Dialog -->
        <div
          v-if="startDialog == true"
          class="startDialog fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 transition-opacity duration-300"
        >
          <div
            class="bg-white p-8 rounded shadow-md transform transition-transform duration-300"
          >
            <div class="headerTask flex justify-around">
              <h1 class="text-2xl font-semibold mb-4">Start Task</h1>

              <h4 class="closeBtn" @click="closestartDialog">X</h4>
            </div>

            <form v-if="addNewTasks.length > 0">
              <div
                class="editStartTask border-black mb-4 flex"
                v-for="(inputs, index) in addNewTasks"
                :key="inputs"
              >
                <select v-model="inputs.fieldType">
                  <option value="">--SELECT--</option>
                  <option value="text">TEXT</option>
                  <option value="number">NUMBER</option>
                </select>

                <input
                  type="text"
                  placeholder="Enter Task Name"
                  v-model="inputs.fieldName"
                />
                <input
                  type="text"
                  placeholder="Enter Task Value"
                  v-model="inputs.fieldValue"
                />
                <button class="removeBtn text-red" @click="removeTask(index)">
                  Remove
                </button>
              </div>
            </form>
            <button class="add" @click="addTask">+</button>
          </div>
        </div>

        <!-- Edit Email-Task Dialog -->
        <div
          v-if="emailDialog == true"
          class="emailDialog fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 transition-opacity duration-300"
        >
          <div
            class="bg-white p-8 rounded shadow-md transform transition-transform duration-300"
          >
            <div class="headerTask flex justify-around">
              <h1 class="text-2xl font-semibold mb-4">Email-Task</h1>

              <img
                class="closeBtn"
                :id="emailTask[0].id + ids"
                @click="closeEmailDialog($event)"
                src="../assets/close.png"
                alt="Image not Found"
              />
            </div>

            <form>
              <div class="editEmailTask border-black mb-4 w-3/4 flex-col">
                <label for="">From:</label>
                <input
                  v-model="emailTask[0].from"
                  style="height: 30px"
                  type="email"
                  placeholder="Enter Email"
                />

                <label for="">To:</label>
                <input
                  v-model="emailTask[0].to"
                  style="height: 30px"
                  type="email"
                  placeholder="Enter Email"
                />

                <label for="">Subject</label>
                <input
                  style="height: 30px"
                  type="text"
                  placeholder="Enter Subject"
                  v-model="emailTask[0].subject"
                />

                <label for="">Description: </label>
                <textarea
                  v-model="emailTask[0].description"
                  name=""
                  id=""
                  cols="50"
                  rows="5"
                  placeholder="Enter Description here..."
                ></textarea>
              </div>
            </form>
          </div>
        </div>

        <!-- Edit-Redirect Dialog -->
        <div
          v-if="redirectDialog == true"
          class="emailDialog fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 transition-opacity duration-300"
        >
          <div
            class="bg-white p-8 rounded shadow-md transform transition-transform duration-300"
          >
            <div class="headerTask flex justify-around">
              <h1 class="text-2xl font-semibold mb-4">Redirect-Task</h1>

              <img
                class="closeBtn"
                @click="closeEmailDialog($event)"
                src="../assets/close.png"
                alt="Image not Found"
              />
            </div>

            <div class="editEmailTask border-black mb-4 w-3/4 flex-col">
              <label for="">Redirect To:</label>
              <input v-model="link" type="text" />
              <!-- <a href="https://www.amazon.com">Redirect To</a> -->
              <button @click="redirectLink">GO</button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<style scoped>
.editEmailTask input,
textarea {
  background-color: lightgray;
  display: flex;
  margin-bottom: 10px;
}

.closeBtn {
  font-size: 18px;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  text-align: center;
  padding: 5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  cursor: pointer;
  background-color: lightgray;
}

.add {
  width: 50px;
  border: 1px solid black;
  padding: 5px;
  color: white;
  background-color: black;
  margin: 0 auto;
  font-size: 20px;
  border-radius: 45%;
}

.start,
.emailtask,
.redirecttask {
  height: 110px;
  width: 110px;
  border-radius: 50%;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-color: lightgray;
}
.start,
.emailtask,
.redirecttask h3 {
  margin-top: 10px;
}

.start .play,
.action {
  margin-left: 37%;
}

.emailtask .emailicon {
  margin-left: 30%;
}

.redirecttask .redirecticon {
  margin-left: 30%;
}

.removeBtn {
  color: red;
}

select,
input {
  border: 1px solid black;
  margin-right: 5px;
}

.removeBtn {
  margin-right: 10px;
}
</style>

<script setup>
import { computed, onMounted, ref } from "vue";
import interact from "interactjs";
import { useStore } from "vuex";

const position = { x: 0, y: 0 };
const store = useStore();

let startDialog = ref(false);
let emailDialog = ref(false);
let redirectDialog = ref(false);

onMounted(() => {
  interact(".emailtask").draggable({
    listeners: {
      start(event) {
        console.log(event.type, event.target);
      },
      move(event) {
        position.x += event.dx;
        position.y += event.dy;

        event.target.style.transform = `translate(${position.x}px, ${position.y}px)`;
      },
    },
  });
  interact(".redirecttask").draggable({
    listeners: {
      start(event) {
        console.log(event.type, event.target);
      },
      move(event) {
        position.x += event.dx;
        position.y += event.dy;

        event.target.style.transform = `translate(${position.x}px, ${position.y}px)`;
      },
    },
  });
});

const editRedirect = () => {
  redirectDialog.value = true;
};
let link = ref("");

const redirectLink = () => {
  window.location.href = link.value;
};

const allTasks = computed(() => {
  return store.getters.getTasks;
});
console.log("All-Tasks are: ", allTasks.value);

const emailTask = ref([]);
const redirectTask = ref([]);

const addNewTasks = ref([]);
const addTask = () => {
  addNewTasks.value.push({
    category: "startTask",
    fieldType: "",
    fieldName: "",
    fieldValue: "",
  });
};

const removeTask = (id) => {
  if (addNewTasks.value.length > 1) {
    addNewTasks.value.pop();
  }
};

const closestartDialog = () => {
  startDialog.value = false;

  addNewTasks.value.forEach((task) => {
    console.log(task);
    store.commit("setTasks", task);
  });
};

const allTaskTypes = [
  {
    id: "email_task",
    category: "emailTask",
    name: "email-task",
    data: [],
    to: "",
    from: "",
    subject: "",
    description: "",
  },
  {
    id: "redirect_task",
    category: "redirectTask",
    name: "redirect-task",
    data: [],
  },
];

let emailTaskId;
const editEmailTask = (event) => {
  emailDialog.value = true;
  emailTaskId = event.target.closest(".editbtn").id;
  console.log("Email-ID: ", emailTaskId);

  computed(() => store.getters("getEmailTasks", emailTaskId));
};

let tempData = ref();
let count = ref(0);
const addEmailTask = (event) => {
  emailTask.value.push({
    // id: allTaskTypes[0].id,
    id: event.target.id,
    category: allTaskTypes[0].category,
    from: allTaskTypes[0].from,
    to: allTaskTypes[0].to,
    subject: allTaskTypes[0].subject,
    description: allTaskTypes[0].description,
  });
  count.value++;

  if (emailTask?.value[emailTask.value.length - 1].category == "emailTask") {
    tempData.value = emailTask?.value[emailTask.value.length - 1];

    tempData.value.id = event.target.id;

    store.commit("setTasks", tempData.value);
    tempData.value = [];
  }
};

const getTasks = computed(() => {
  return store.getters.getEmailTasks;
});

const closeEmailDialog = (e) => {
  emailDialog.value = false;
  tempData.value.id = emailTaskId;

  store.commit("setTasks", tempData.value);
  tempData.value = [];
};

const addRedirectTask = () => {
  redirectTask.value.push({
    redirect: redirectTask.value,
  });
};

const deleteRedirectTask = (id) => {
  redirectTask.value = redirectTask.value.filter((task, i) => i != id);
};

const editStartTask = () => {
  startDialog.value = true;
};

const deleteStartTask = () => {
  alert("You-Clicked-Delete-Start-Task-Button");
  console.log("inside-function");
};
</script>
