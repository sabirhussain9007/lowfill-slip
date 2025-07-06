import React from 'react';
import { useSnackbar } from 'notistack';

// Define initial form state with all fields
const initialFormState = {
  date: '',
  month: '',
  outletName: '',
  outletCode: '',
  routeName: '',
  routeCode: '',
  zone: '',
  crName: '',
  crCode: '',
  adrName: '',
  tdmName: '',
  smName: '',
  lastYearSales: '',
  currentYearSales: '',
  expBox: 'Select an option',
  // Optional fields
  regMtBot: '',
  regMtCase: '',
  slcMtBot: '',
  slcMtCase: '',
  stingMtBot: '',
  stingMtCase: '',
  aquafina6ltrBottle: '',
  aquafina6ltrCase: '',
  regular250Bottle: '',
  regular250Case: '',
  sting240Bottle: '',
  sting240Case: '',
  slice240Bottle: '',
  slice240Case: '',
  can250Bottle: '',
  can250Case: '',
  pet345Bottle: '',
  pet345Case: '',
  pet500Bottle: '',
  pet500Case: '',
  pet1000Bottle: '',
  pet1000Case: '',
  pet1250Bottle: '',
  pet1250Case: '',
  pet1500Bottle: '',
  pet1500Case: '',
  pet2250Bottle: '',
  pet2250Case: '',
  can300Bottle: '',
  can300Case: '',
  sting500Bottle: '',
  sting500Case: '',
  sting300Bottle: '',
  sting300Case: '',
  stingCanBottle: '',
  stingCanCase: '',
  slice355Bottle: '',
  slice355Case: '',
  slicePet1000Bottle: '',
  slicePet1000Case: '',
  sliceTetra1000Bottle: '',
  sliceTetra1000Case: '',
  slicetetra200Bottle: '',
  slicetetra200Case: '',
  aquafina330Bottle: '',
  aquafina330Case: '',
  aquafina500Bottle: '',
  aquafina500Case: '',
  aquafina1500Bottle: '',
  aquafina1500Case: '',
  gatorade500Bottle: '',
  gatorade500Case: '',
  revive300Bottle: '',
  revive300Case: ''
};

export default function Form({ formData = initialFormState, onChange, onSubmit }) {
  const { enqueueSnackbar } = useSnackbar();

  // Merge incoming formData with initial state to ensure all fields exist
  const safeFormData = { ...initialFormState, ...formData };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate required fields
    const requiredFields = [
      'date', 'month', 'outletName', 'outletCode', 'routeName', 
      'routeCode', 'zone', 'crName', 'crCode', 'adrName', 
      'tdmName', 'smName', 'lastYearSales', 'currentYearSales', 'expBox'
    ];

    const isMissingRequiredField = requiredFields.some(field => {
      const value = safeFormData[field];
      return value === undefined || value === null || 
             (typeof value === 'string' && value.trim() === '') ||
             (field === 'expBox' && value === 'Select an option');
    });

    if (isMissingRequiredField) {
      enqueueSnackbar('Please fill in all required fields', { variant: 'error' });
      return;
    }

    // Validate numeric fields
    const numericFields = [
      'regMtBot', 'regMtCase', 'slcMtBot', 'slcMtCase', 'stingMtBot', 
      'stingMtCase', 'aquafina6ltrBottle', 'aquafina6ltrCase', 
      'regular250Bottle', 'regular250Case', 'sting240Bottle', 
      'sting240Case', 'slice240Bottle', 'slice240Case', 'can250Bottle', 
      'can250Case', 'pet345Bottle', 'pet345Case', 'pet500Bottle', 
      'pet500Case', 'pet1000Bottle', 'pet1000Case', 'pet1250Bottle', 
      'pet1250Case', 'pet1500Bottle', 'pet1500Case', 'pet2250Bottle', 
      'pet2250Case', 'can300Bottle', 'can300Case', 'sting500Bottle', 
      'sting500Case', 'sting300Bottle', 'sting300Case', 'stingCanBottle', 
      'stingCanCase', 'slice355Bottle', 'slice355Case', 'slicePet1000Bottle', 
      'slicePet1000Case', 'sliceTetra1000Bottle', 'sliceTetra1000Case', 
      'slicetetra200Bottle', 'slicetetra200Case', 'aquafina330Bottle', 
      'aquafina330Case', 'aquafina500Bottle', 'aquafina500Case', 
      'aquafina1500Bottle', 'aquafina1500Case', 'gatorade500Bottle', 
      'gatorade500Case', 'revive300Bottle', 'revive300Case'
    ];

    const hasInvalidNumber = numericFields.some(field => {
      const value = safeFormData[field];
      return value !== undefined && value !== null && value !== '' && isNaN(Number(value));
    });

    if (hasInvalidNumber) {
      enqueueSnackbar('Please enter valid numbers for all quantity fields', { variant: 'error' });
      return;
    }

    enqueueSnackbar('Data saved successfully!', { variant: 'success' });
    onSubmit(safeFormData);
  };

  const requiredFields = [
    { label: 'DATE', type: 'date', name: 'date', required: true },
    { label: 'MONTH', type: 'month', name: 'month', required: true },
    { label: 'OUTLET NAME', type: 'text', name: 'outletName', required: true, placeholder: 'Enter outlet name' },
    { label: 'OUTLET CODE', type: 'text', name: 'outletCode', required: true, placeholder: 'Enter outlet code' },
    { label: 'ROUTE NAME', type: 'text', name: 'routeName', required: true, placeholder: 'Enter route name' },
    { label: 'ROUTE CODE', type: 'text', name: 'routeCode', required: true, placeholder: 'Enter route code' },
    { label: 'ZONE', type: 'text', name: 'zone', required: true, placeholder: 'Enter zone' },
    { label: 'CR NAME', type: 'text', name: 'crName', required: true, placeholder: 'Enter CR name' },
    { label: 'CR CARD#', type: 'number', name: 'crCode', required: true, placeholder: 'Enter CR code' },
    { label: 'ADR NAME', type: 'text', name: 'adrName', required: true, placeholder: 'Enter ADR name' },
    { label: 'TDM NAME', type: 'text', name: 'tdmName', required: true, placeholder: 'Enter TDM name' },
    { label: 'SM/RSM NAME', type: 'text', name: 'smName', required: true, placeholder: 'Enter SM name' },
    { label: 'LAST YEAR SALES', type: 'number', name: 'lastYearSales', required: true, placeholder: 'Enter last year sales' },
    { label: 'CURRENT YEAR SALES', type: 'number', name: 'currentYearSales', required: true, placeholder: 'Enter current year sales' },
    { label: 'EXP BOX', type: 'select', name: 'expBox', required: true, options: ['Select an option', 'No', 'CR ACCOUNT', 'OPEN LOWFILL'] },
  ];

  const optionalFields = [
    { label: 'REG 250ML EMPTY', name: 'regMtBot', caseName: 'regMtCase' },
    { label: 'SLICE EMPTY', name: 'slcMtBot', caseName: 'slcMtCase' },
    { label: 'STING EMPTY', name: 'stingMtBot', caseName: 'stingMtCase' },
    { label: 'AQUAFINA 6 LTR', name: 'aquafina6ltrBottle', caseName: 'aquafina6ltrCase' },
    { label: 'REGULAR 250ML CSD', name: 'regular250Bottle', caseName: 'regular250Case' },
    { label: 'STING 240ML', name: 'sting240Bottle', caseName: 'sting240Case' },
    { label: 'SLICE 240ML', name: 'slice240Bottle', caseName: 'slice240Case' },
    { label: 'CAN 250ML', name: 'can250Bottle', caseName: 'can250Case' },
    { label: 'PET 345ML CSD', name: 'pet345Bottle', caseName: 'pet345Case' },
    { label: 'PET 500ML CSD', name: 'pet500Bottle', caseName: 'pet500Case' },
    { label: 'PET 1000ML CSD', name: 'pet1000Bottle', caseName: 'pet1000Case' },
    { label: 'PET 1250ML CSD', name: 'pet1250Bottle', caseName: 'pet1250Case' },
    { label: 'PET 1500ML CSD', name: 'pet1500Bottle', caseName: 'pet1500Case' },
    { label: 'PET 2250ML CSD', name: 'pet2250Bottle', caseName: 'pet2250Case' },
    { label: 'CAN 300ML', name: 'can300Bottle', caseName: 'can300Case' },
    { label: 'STING 500ML', name: 'sting500Bottle', caseName: 'sting500Case' },
    { label: 'STING 300ML', name: 'sting300Bottle', caseName: 'sting300Case' },
    { label: 'STING CAN 250ML', name: 'stingCanBottle', caseName: 'stingCanCase' },
    { label: 'SLICE 355 ML', name: 'slice355Bottle', caseName: 'slice355Case' },
    { label: 'SLICE PET 1000 ML', name: 'slicePet1000Bottle', caseName: 'slicePet1000Case' },
    { label: 'SLICE TETRA 1000 ML', name: 'sliceTetra1000Bottle', caseName: 'sliceTetra1000Case' },
    { label: 'SLICE TETRA 200 ML', name: 'slicetetra200Bottle', caseName: 'slicetetra200Case' },
    { label: 'AQUAFINA 330 ML', name: 'aquafina330Bottle', caseName: 'aquafina330Case' },
    { label: 'AQUAFINA 500 ML', name: 'aquafina500Bottle', caseName: 'aquafina500Case' },
    { label: 'AQUAFINA 1500 ML', name: 'aquafina1500Bottle', caseName: 'aquafina1500Case' },
    { label: 'GATORADE 500 ML', name: 'gatorade500Bottle', caseName: 'gatorade500Case' },
    { label: 'REVIVE 300 ML', name: 'revive300Bottle', caseName: 'revive300Case' },
  ];

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow flex flex-col" noValidate>
      {/* Required fields */}
      {requiredFields.map(({ label, type, name, required, placeholder, options }) => (
        <div className="grid grid-cols-12 gap-4 mb-4" key={name}>
          <label className="col-span-4 flex items-center justify-center text-blue-900 text-sm font-semibold" htmlFor={name}>
            {label}
          </label>
          <div className="col-span-8">
            {type === 'select' ? (
              <select
                id={name}
                name={name}
                value={safeFormData[name]}
                onChange={onChange}
                required={required}
                className="bg-gray-100 border border-gray-300 rounded-lg p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
              >
                {options.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            ) : (
              <input
                type={type}
                id={name}
                name={name}
                value={safeFormData[name]}
                onChange={onChange}
                required={required}
                placeholder={placeholder}
                className="bg-gray-100 border border-gray-300 rounded-lg p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
              />
            )}
          </div>
        </div>
      ))}

      {/* Optional fields */}
      {optionalFields.map(({ label, name, caseName }) => (
        <div className="grid grid-cols-12 gap-4 mb-4" key={name}>
          <label className="col-span-4 flex items-center justify-center text-blue-900 text-sm font-semibold" htmlFor={name}>
            {label}
          </label>
          <div className="col-span-4">
            <input
              type="number"
              id={name}
              name={name}
              value={safeFormData[name]}
              onChange={onChange}
              placeholder="Bottles"
              className="bg-gray-100 border border-gray-300 rounded-lg p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
            />
          </div>
          <div className="col-span-4">
            <input
              type="number"
              id={caseName}
              name={caseName}
              value={safeFormData[caseName]}
              onChange={onChange}
              placeholder="Cases"
              className="bg-gray-100 border border-gray-300 rounded-lg p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
            />
          </div>
        </div>
      ))}

      <button
        type="submit"
        className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors"
      >
        Save Data
      </button>
    </form>
  );
}