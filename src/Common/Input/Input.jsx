import React from "react";

export default function CommonInput({step,value, onchange, type, placeholder, className , name}) {
  return (
    <div>
      <input step={step} name={name} value={value} onChange={onchange} className={className} type={type} placeholder={placeholder} required  />
    </div>
  );
}
