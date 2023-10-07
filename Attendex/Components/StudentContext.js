import React, { createContext, useState, useContext } from 'react';

const StudentContext = createContext();

export function StudentProvider({ children }) {
  const [studentInfo, setStudentInfo] = useState(null);

  const updatedSetStudentInfo = (newStudentInfo) => {
    console.log('Context updated with new studentInfo:', newStudentInfo);
    setStudentInfo(newStudentInfo);
  };

  return (
    <StudentContext.Provider value={{ studentInfo, setStudentInfo: updatedSetStudentInfo }}>
      {children}
    </StudentContext.Provider>
  );
}

export function useStudentContext() {
  return useContext(StudentContext);
}
