import $ from "jquery";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { storeState, changeState } from "./js/plant";

// Set stateControl

const stateControl = storeState();

// Functions for stateControl

const feed = changeState("soil")(1);
const superFeed = changeState("soil")(5);

const hydrate = changeState("water")(1);
const superWater = changeState("water")(5);

const giveLight = changeState("light")(1);
const superLight = changeState("light")(5);

$(() => {
  // Regular grow buttons
  $('#feed').on("click", () => {
    const newState = stateControl(feed);
    $('#soil-value').text(`Soil: ${newState.soil}`);
  });
  $('#water').on("click", () => {
    const newState = stateControl(hydrate);
    $('#water-value').text(`Water: ${newState.water}`);
  });
  $('#light').on("click", () => {
    const newState = stateControl(giveLight);
    $('#light-value').text(`Light: ${newState.light}`);
  });

  // Super grow buttons
  $('#superFeed').on("click", () => {
    const newState = stateControl(superFeed);
    $('#soil-value').text(`Soil: ${newState.soil}`);
  });
  $('#superWater').on("click", () => {
    const newState = stateControl(superWater);
    $('#water-value').text(`Water: ${newState.water}`);
  });
  $('#superLight').on("click", () => {
    const newState = stateControl(superLight);
    $('#light-value').text(`Light: ${newState.light}`);
  });
});