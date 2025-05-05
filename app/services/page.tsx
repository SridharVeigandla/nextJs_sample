"use client"; // If inside a client component

import React from "react";
import ServicesNew from "@/components/services1";

import { useEffect, useState } from "react";const Services = () => {

    useEffect(() => {
        async function fetchServices() {
          const response = await fetch("/api/mock");
          const data = await response.json();
          console.log("from api ",data)
          }
        fetchServices();
      }, []);
  return (

    <>
    Hello from services n
    <ServicesNew/>

    </>
  )
}
  export default Services