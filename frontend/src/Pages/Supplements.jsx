import { Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import './Supplements.css';

const supplementsData = [
  { name: 'Vitamin A', description: 'Supports vision and immune function.' },
  { name: 'Vitamin B1 (Thiamine)', description: 'Helps convert nutrients into energy.' },
  { name: 'Vitamin B2 (Riboflavin)', description: 'Essential for energy production and cellular function.' },
  { name: 'Vitamin B3 (Niacin)', description: 'Supports metabolism and skin health.' },
  { name: 'Vitamin B5 (Pantothenic Acid)', description: 'Aids in energy production and hormone synthesis.' },
  { name: 'Vitamin B6 (Pyridoxine)', description: 'Important for amino acid metabolism and brain health.' },
  { name: 'Vitamin B7 (Biotin)', description: 'Supports hair, skin, and nail health.' },
  { name: 'Vitamin B9 (Folate)', description: 'Crucial for DNA synthesis and cell growth.' },
  { name: 'Vitamin B12 (Cobalamin)', description: 'Essential for red blood cell formation and nerve function.' },
  { name: 'Vitamin C', description: 'Antioxidant that supports immune function and skin health.' },
  { name: 'Vitamin D', description: 'Helps with calcium absorption and bone health.' },
  { name: 'Vitamin E', description: 'Protects cells from oxidative damage and supports skin health.' },
  { name: 'Vitamin K', description: 'Important for blood clotting and bone health.' },
  { name: 'Calcium', description: 'Supports bone and dental health.' },
  { name: 'Magnesium', description: 'Aids in muscle and nerve function, and bone health.' },
  { name: 'Zinc', description: 'Supports immune function and wound healing.' },
  { name: 'Iron', description: 'Essential for red blood cell production and oxygen transport.' },
  { name: 'Omega-3 Fatty Acids', description: 'Supports heart health and brain function.' },
  { name: 'Probiotics', description: 'Promotes digestive health and a balanced gut flora.' },
  { name: 'Coenzyme Q10', description: 'Supports cellular energy production and antioxidant protection.' },
  { name: 'Turmeric', description: 'Contains curcumin, which has anti-inflammatory properties.' },
  { name: 'Garlic', description: 'Supports cardiovascular health and immune function.' },
  { name: 'Green Tea Extract', description: 'Rich in antioxidants and supports metabolism.' },
  { name: 'Ginseng', description: 'Supports energy levels and cognitive function.' },
  { name: 'Glucosamine', description: 'Supports joint health and cartilage repair.' },
  { name: 'Chondroitin', description: 'Works with glucosamine to maintain joint health.' },
  { name: 'Hyaluronic Acid', description: 'Supports skin hydration and joint health.' },
  { name: 'Milk Thistle', description: 'Supports liver health and detoxification.' },
  { name: 'Echinacea', description: 'Supports immune function and respiratory health.' },
  { name: 'Rhodiola Rosea', description: 'Helps with stress management and mental performance.' },
  { name: 'Ashwagandha', description: 'Supports stress reduction and overall well-being.' },
  { name: 'L-Carnitine', description: 'Aids in fat metabolism and energy production.' },
  { name: 'L-Theanine', description: 'Supports relaxation and cognitive function.' },
  { name: 'Selenium', description: 'Antioxidant that supports thyroid function and immune health.' },
  { name: 'Iodine', description: 'Supports thyroid health and hormone production.' },
  { name: 'Maca Root', description: 'Supports energy levels and hormonal balance.' },
  { name: 'Evening Primrose Oil', description: 'Supports skin health and hormonal balance.' },
  { name: 'Folic Acid', description: 'Supports cell division and neural tube development.' },
  { name: 'Alpha-Lipoic Acid', description: 'Powerful antioxidant that supports metabolic health.' },
  { name: 'Bacopa Monnieri', description: 'Supports cognitive function and memory.' },
  { name: 'Cordyceps', description: 'Supports energy levels and athletic performance.' },
  { name: 'Ginger', description: 'Supports digestive health and reduces nausea.' },
  { name: 'Spirulina', description: 'Rich in protein and nutrients, supports overall health.' },
  { name: 'Kelp', description: 'Supports thyroid health and metabolism.' },
  { name: 'Berberine', description: 'Supports metabolic health and blood sugar balance.' },
  { name: 'Resveratrol', description: 'Antioxidant that supports cardiovascular health.' },
  { name: 'Methylsulfonylmethane (MSM)', description: 'Supports joint health and reduces inflammation.' },
  { name: 'Vitamin B Complex', description: 'Combination of essential B vitamins for overall health.' },
  { name: 'Calcium Citrate', description: 'Bioavailable form of calcium that supports bone health.' },
  { name: 'Dandelion Root', description: 'Supports liver health and digestion.' },
  { name: 'Hawthorn Berry', description: 'Supports cardiovascular health and circulation.' },
  { name: 'N-Acetyl Cysteine (NAC)', description: 'Supports antioxidant levels and lung health.' },
  { name: 'Cinnamon', description: 'Supports healthy blood sugar levels and metabolism.' },
  { name: 'Pomegranate Extract', description: 'Rich in antioxidants and supports heart health.' },
  { name: 'L-Arginine', description: 'Supports cardiovascular health and nitric oxide production.' },
  { name: 'Grape Seed Extract', description: 'Rich in antioxidants and supports vascular health.' }
];

const Supplements = () => {
  const [selectedSupplements, setSelectedSupplements] = useState([]);
  const [filter, setFilter] = useState('');

  const toggleSupplement = (supplement) => {
    if (selectedSupplements.includes(supplement)) {
      setSelectedSupplements(selectedSupplements.filter(item => item !== supplement));
    } else {
      setSelectedSupplements([...selectedSupplements, supplement]);
    }
  };

  const handleSaveSelection = () => {
    alert(`Selected Supplements:\n${selectedSupplements.join(', ')}`);
  };

  const filteredSupplements = supplementsData.filter(supplement =>
    supplement.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="supplements-container">
      <Typography variant="h4" className="supplements-title">
        Personalized Supplement Recommendations
      </Typography><br />
      <TextField
        label="Search Supplements"
        variant="outlined"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="supplement-search"
      /><br /><br />
      <Grid container spacing={2} className="supplements-grid">
        {filteredSupplements.map((supplement, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              className={`supplement-card ${selectedSupplements.includes(supplement.name) ? 'selected' : ''}`}
              onClick={() => toggleSupplement(supplement.name)}
            >
              <CardContent>
                <Typography variant="h6" className="supplement-name">
                  {supplement.name}
                </Typography>
                <Typography variant="body2" className="supplement-description">
                  {supplement.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      {selectedSupplements.length > 0 && (
        <div className="selected-supplements"><br />
          <Typography variant="h5" className="selected-title">
            Selected Supplements
          </Typography>
          <p className="selected-list">
            {selectedSupplements.map((supplement, index) => (
              <li key={index} className="selected-item">
                {supplement}
              </li>
            ))}
          </p>
          <Button variant="contained" color="primary" className="save-button" onClick={handleSaveSelection}>
            Save Selection
          </Button>
        </div>
      )}
    </div>
  );
};

export default Supplements;
