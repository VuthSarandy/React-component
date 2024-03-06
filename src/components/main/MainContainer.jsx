import React from "react";
import CardCompo from "./CardCompo";
import FeedbackCompo from "./FeedbackCompo";

export default function MainContainer() {
  return (
    <main>
      <h1 className="text-blue-600 text-4xl mt-[50px] mb-8 font-bold">
        Products
      </h1>
      <div className="grid m-8 sm:grid-cols-1 md:grid-cols-2 gap-7 lg:grid-cols-3 xl:grid-cols-4">
        <CardCompo />
        <CardCompo />
        <CardCompo />
        <CardCompo />
        <CardCompo />
        <CardCompo />
        <CardCompo />
        <CardCompo />
      </div>
      <h1 className="text-blue-600 text-4xl mt-[50px] mb-8 font-bold">
        Feedback
      </h1>
      <div>
        <FeedbackCompo />
      </div>
    </main>
  );
}
