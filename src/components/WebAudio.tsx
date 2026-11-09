import { useEffect, useState, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { init, SynthParams, SynthEngine } from "ambient-synth";
import { logger } from "../libs/debug_config.mjs";

const WebAudio = () => {
  const button_ref = useRef<HTMLButtonElement>(null);
  const initialised = useRef(false);
  const [ctx, set_ctx] = useState<SynthEngine | null>(null);
  const [error, set_error] = useState<Error | null>(null);

  //Process any query string parameters
  const [search_params] = useSearchParams();

  // Create the web audio context on intial load of page
  useEffect(() => {
    const run = async () => {
      try {
        set_ctx(init());
      } catch (error) {
        if (error instanceof Error) set_error(error);
      }
    };
    run();
  }, []);

  // Start Playback on button press
  const handle_start = () => {};

  //Resport any errors to the user
  useEffect(() => {
    if (!error) return;

    toast.error(
      <span>
        Error on start:
        <br />
        {error.message}
      </span>,
    );
  }, [error]);

  return (
    <div>
      <h1>Web Audio Ambient Noise Synth Demo</h1>
      <div className="row">
        <div className="col">
          <input type="range" className="vertical-form-range"></input>
        </div>
        <div className="col">
          <input type="range" className="vertical-form-range"></input>
        </div>
        <div className="col">
          <input type="range" className="vertical-form-range"></input>
        </div>
        <div className="col">
          <input type="range" className="vertical-form-range"></input>
        </div>
        <div className="col">
          <input type="range" className="vertical-form-range"></input>
        </div>
      </div>
      <div className="row">
        <label htmlFor="customRange1" className="form-label col">
          Style
        </label>
        <label htmlFor="customRange1" className="form-label col">
          Tempo
        </label>
        <label htmlFor="customRange1" className="form-label col">
          Mood
        </label>
        <label htmlFor="customRange1" className="form-label col">
          Space
        </label>
        <label htmlFor="customRange1" className="form-label col">
          Example range
        </label>
      </div>
      <button id="fullscreen-btn" ref={button_ref} onClick={handle_start}>
        Start Playback
      </button>
      <ToastContainer />
    </div>
  );
};

export default WebAudio;
