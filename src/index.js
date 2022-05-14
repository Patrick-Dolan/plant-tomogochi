import $ from "jquery";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { storeState, changeState } from "./js/plant";

// Set stateControl

const stateControl = storeState();

// Functions for plant growth

const feed = changeState("soil")(1);
const superFeed = changeState("soil")(5);
const lowerSoil = changeState("soil")(-1);

const hydrate = changeState("water")(1);
const superWater = changeState("water")(5);
const lowerWater = changeState("water")(-1);

const giveLight = changeState("light")(1);
const superLight = changeState("light")(5);
const lowerLight = changeState("light")(-1);

// Functions for plant degradation

const degrade = changeState("health")(-1);

// Utility Function for displaying plant stats

const displayStats = () => {
  const currentState = stateControl();
  $('#health-value').text(`${currentState.health}`);
  $('#soil-value').text(`${currentState.soil}`);
  $('#water-value').text(`${currentState.water}`);
  $('#light-value').text(`${currentState.light}`);
};

$(() => {

  displayStats();
  
  // Interal timer that checks every 10 seconds and if any of the three variables are zero lowers health
  setInterval(function () {
    const currentState = stateControl();
    if (currentState.soil <= 0 || currentState.water <= 0 || currentState.light <= 0) {
      const newState = stateControl(degrade);
      $('#health-value').text(`${newState.health}`);
    } else {
      const randomNumber = Math.floor(Math.random() * 3) + 1;
      if (randomNumber == 1) {
        const newState = stateControl(lowerSoil);
        $('#soil-value').text(`${newState.soil}`);
      } else if (randomNumber == 2) {
        const newState = stateControl(lowerWater);
        $('#water-value').text(`${newState.water}`);
      } else {
        const newState = stateControl(lowerLight);
        $('#light-value').text(`${newState.light}`);
      }
    }
  }, 5000);

  // Regular grow buttons
  $('#feed').on("click", () => {
    const newState = stateControl(feed);
    $('#soil-value').text(`${newState.soil}`);
  });
  $('#water').on("click", () => {
    const newState = stateControl(hydrate);
    $('#water-value').text(`${newState.water}`);
  });
  $('#light').on("click", () => {
    const newState = stateControl(giveLight);
    $('#light-value').text(`${newState.light}`);
  });

  // Super grow buttons
  $('#superFeed').on("click", () => {
    const newState = stateControl(superFeed);
    $('#soil-value').text(`${newState.soil}`);
  });
  $('#superWater').on("click", () => {
    const newState = stateControl(superWater);
    $('#water-value').text(`${newState.water}`);
  });
  $('#superLight').on("click", () => {
    const newState = stateControl(superLight);
    $('#light-value').text(`${newState.light}`);
  });
});