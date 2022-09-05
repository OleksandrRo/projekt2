// SearchIngredients 

<div>
                <select name="diet" onChange={(e) => setDiet(e.target.value)}>
                    {DIET.map((e) => (
                        <option key={e.name} value={e.value}> {e.name}</option>))}
                </select>
                <br />
                <select name="health" onChange={(e) => setHealth(e.target.value)}>
                    {HEALTH.map((e) => (
                        <option key={e.name} value={e.value}> {e.name}</option>))}
                </select>
                <br />
                <select name="mealType" onChange={(e) => setMealType(e.target.value)}>
                    {MEALTYPE.map((e) => (
                        <option key={e.name} value={e.value}>{e.name}</option>))}
                </select>
                <br />
                <select name="dishType" onChange={(e) => setDishType(e.target.value)}>
                    {DISHTYPE.map((e) => (
                        <option key={e.name} value={e.value}>{e.name}</option>))}
                </select>
                <br />
                <select name={cookingTime} onChange={(e) => setCookingTime(e.target.value)}>
                    {COOKINGTIME.map((e) => (
                        <option key={e.name} value={e.value}>{e.name}</option>))}   
                </select>
            </div>