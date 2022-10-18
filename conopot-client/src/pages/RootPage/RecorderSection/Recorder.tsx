import styled from "@emotion/styled";
import React, { useEffect, useRef, useState } from "react";
import Button from "../../../components/common/Button";

type Props = {};

interface TFWindow extends Window {
  speechCommands?: any;
}

type Recognizer = {
  wordLabels: () => any[];
  stopListening: () => any;
  ensureModelLoaded: () => any;
  listen: (callback: (result: any) => void, options: any) => void;
};

const Recorder = (props: Props) => {
  const playerRef = useRef<HTMLDivElement>(null);
  const recognizerRef = useRef<Recognizer>();
  const URL = "https://teachablemachine.withgoogle.com/models/ZHjjyd5ts/";
  const [artistList, setArtistList] = useState<any[]>([]);
  const [classPredictionList, setClassPredictionList] = useState<any[]>([]);
  const [currentMatchingArtist, setCurrentMatchingArtist] = useState();
  const [bestMatchingArtist, setBestMatchingArtist] = useState();
  const [singerScoreList, setSingerScoreList] = useState<any>([]);

  let status = "배경 소음";
  let current = document.getElementsByTagName("p")[0]; // 현재 음악
  let electronic = document.getElementsByTagName("p")[1]; // 전자 음악이 몇 초동안 지속되었는지

  async function createModel() {
    const checkpointURL = URL + "model.json"; // model topology
    const metadataURL = URL + "metadata.json"; // model metadata

    recognizerRef.current = (window as TFWindow).speechCommands.create(
      "BROWSER_FFT", // fourier transform type, not useful to change
      undefined, // speech commands vocabulary feature, not useful for your models
      checkpointURL,
      metadataURL
    );

    // check that model and metadata are loaded via HTTPS requests.
    await recognizerRef.current?.ensureModelLoaded();
  }

  const init = async () => {
    await createModel();
    const artistList = recognizerRef.current?.wordLabels() ?? []; // get class labels
    let scoreList: number[] = [];
    if (artistList) {
      setArtistList([...artistList]);
      scoreList = artistList.map(() => {
        return 0.0;
      });
    }

    recognizerRef.current?.listen(
      (result: any) => {
        artistList.forEach((_, index) => {
          return (scoreList[index] += result.scores[index]);
        });
        setSingerScoreList([...singerScoreList]);

        const classPredictionList = artistList.map((_, index) => {
          return `${artistList[index]} : ${result.scores[index].toFixed(2)}`;
        });
        setClassPredictionList([...classPredictionList]);

        if (0.8 <= result.scores[0]) {
          setCurrentMatchingArtist(artistList[0]);
        } else if (0.8 <= result.scores[1]) {
          setCurrentMatchingArtist(artistList[1]);
        } else if (0.8 <= result.scores[2]) {
          setCurrentMatchingArtist(artistList[2]);
        } else if (0.8 <= result.scores[3]) {
          setCurrentMatchingArtist(artistList[3]);
        } else if (0.8 <= result.scores[4]) {
          setCurrentMatchingArtist(artistList[4]);
        } else {
          setCurrentMatchingArtist(artistList[5]);
        }
      },
      {
        includeSpectrogram: true,
        probabilityThreshold: 0.75,
        invokeCallbackOnNoiseAndUnknown: true,
        overlapFactor: 0.5,
      }
    );

    setTimeout(() => recognizerRef.current?.stopListening(), 10000);
  };

  const stop = () => {
    try {
      recognizerRef.current?.stopListening();
    } catch (error) {}
  };

  const inference = () => {
    let cmp = -1.0;
    artistList.forEach((classLabel, index) => {
      if (classLabel === "배경 소음") {
        return;
      }
      console.log(singerScoreList[index]);
      if (cmp < singerScoreList[index]) {
        console.log(cmp);
        setBestMatchingArtist(classLabel);
        cmp = singerScoreList[index];
      }
    });
  };

  return (
    <div>
      <div id="label-container"></div>
      <h1></h1>
      <p>현재 : {currentMatchingArtist}</p>
      <div>
        {classPredictionList.map((artist) => (
          <ArtistName key={artist}>{artist}</ArtistName>
        ))}
      </div>
      <Button onClick={init}>녹음 시작하기</Button>
      <Button onClick={stop}>중지하기</Button>
      <Button onClick={inference}>결과 보기</Button>
    </div>
  );
};

const ArtistName = styled.li`
  font-size: 30px;
  list-style: none;
  text-align: left;
  font-weight: 600;
  margin: 12px 0;
`;

export default Recorder;
