import Head from "next/head";
import Image from "next/image";

import { Canvas } from "react-three-fiber";
import { Suspense } from "react";
import { Loader } from "@react-three/drei";

import styles from "../styles/Home.module.css";
import Lights from "../components/Lights";
import GLTFModal from "../components/GTLFModal";

export default function Home() {
  return (
    <div className="py-8 mx-auto px-8 bg-red-600 text-white text-center font-serif">
      <Head>
        <title>Festival Días Dorados</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-4xl">
        <h1>
          ¡Bienvenidxs
          <br /> a la página oficial del <br />
          Festival Días Dorados!
        </h1>
      </div>
      <div className="mt-6">
        <Image
          src="/separator.gif"
          alt="separator"
          //layout="fill"
          width={600}
          height={30}
        />
      </div>
      <div className="h-96">
        <Canvas
          //className="h-72"
          colorManagement
          concurrent
          pixelRatio={[1, 1.5]}
        >
          <Suspense fallback={null}>
            <Lights />
            <GLTFModal
              scenePath="/scene.gltf"
              position={[0, -1, 0]}
              rotation={[0.002, 0.01, 0]}
              scale={[0.33, 0.33, 0.33]}
            />
          </Suspense>
        </Canvas>
        <Loader />
      </div>
      <div className="text-2xl my-12">
        <p>👀 ¿Proxima fecha u evento? 👀</p>
        <p>😁 Muy pronto 😁</p>
      </div>
      <div>
        <p>Seguinos en nuestras Redes Sociales:</p>
        <ul className="mt-2 mb-3 text-blue-800 mx-auto grid grid-cols-1 justify-items-center">
          <li className="mb-1">
            <a
              href="https://www.facebook.com/festivaldiasdorados"
              className="w-fill flex p-3 pl-3"
              target="_blank"
            >
              <img className="flex-none w-6 h-full" src="/bullet1.gif" />
              <span className="ml-2 truncate" title="Facebook">
                Facebook
              </span>
            </a>
          </li>
          <li className="mb-1">
            <a
              href="https://www.instagram.com/festivaldiasdorados/"
              className="w-fill flex p-3 pl-3"
              target="_blank"
            >
              <img className="flex-none w-6 h-full" src="/bullet1.gif" />
              <span className="ml-2 truncate" title="Instagram">
                Instagram
              </span>
            </a>
          </li>
        </ul>
      </div>
      <div className="sm:mt-28 mt-14">
        <hr />
        <p className="mt-10">© Festival Días Dorados 2021</p>
      </div>
    </div>
  );
}
