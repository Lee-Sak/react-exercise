import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React from "react";
import { useState, useEffect, useMemo, useRef } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Movies } from "./movies";
const Index = () => {
  console.log("index hi");
  return <h1>home</h1>;
};
export default Index;
