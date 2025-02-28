interface CountrySelectProps {
    value: string;
    onChange: ( event: React.ChangeEvent<HTMLSelectElement> ) => void;
}
export default function CountrySelect({ value, onChange }: CountrySelectProps) {

    return (
        <select value={value} onChange={onChange} className="w-full border border-gray-300 rounded-md p-2">
            <option value="93">Afeganistão</option>
                <option value="355">Albânia</option>
                <option value="49">Alemanha</option>
                <option value="376">Andorra</option>
                <option value="244">Angola</option>
                <option value="54">Argentina</option>
                <option value="374">Armênia</option>
                <option value="61">Austrália</option>
                <option value="43">Áustria</option>
                <option value="973">Bahrein</option>
                <option value="880">Bangladesh</option>
                <option value="375">Bielorrússia</option>
                <option value="32">Bélgica</option>
                <option value="55">Brasil</option>
                <option value="359">Bulgária</option>
                <option value="1">Canadá</option>
                <option value="56">Chile</option>
                <option value="86">China</option>
                <option value="57">Colômbia</option>
                <option value="506">Costa Rica</option>
                <option value="385">Croácia</option>
                <option value="53">Cuba</option>
                <option value="45">Dinamarca</option>
                <option value="20">Egito</option>
                <option value="503">El Salvador</option>
                <option value="34">Espanha</option>
                <option value="1">Estados Unidos</option>
                <option value="372">Estônia</option>
                <option value="63">Filipinas</option>
                <option value="358">Finlândia</option>
                <option value="33">França</option>
                <option value="995">Geórgia</option>
                <option value="233">Gana</option>
                <option value="30">Grécia</option>
                <option value="852">Hong Kong</option>
                <option value="36">Hungria</option>
                <option value="91">Índia</option>
                <option value="62">Indonésia</option>
                <option value="98">Irã</option>
                <option value="353">Irlanda</option>
                <option value="972">Israel</option>
                <option value="39">Itália</option>
                <option value="81">Japão</option>
                <option value="7">Cazaquistão</option>
                <option value="254">Quênia</option>
                <option value="82">Coreia do Sul</option>
                <option value="965">Kuwait</option>
                <option value="856">Laos</option>
                <option value="371">Letônia</option>
                <option value="370">Lituânia</option>
                <option value="352">Luxemburgo</option>
                <option value="60">Malásia</option>
                <option value="52">México</option>
                <option value="212">Marrocos</option>
                <option value="31">Países Baixos</option>
                <option value="64">Nova Zelândia</option>
                <option value="47">Noruega</option>
                <option value="92">Paquistão</option>
                <option value="507">Panamá</option>
                <option value="595">Paraguai</option>
                <option value="51">Peru</option>
                <option value="48">Polônia</option>
                <option value="351">Portugal</option>
                <option value="974">Catar</option>
                <option value="40">Romênia</option>
                <option value="7">Rússia</option>
                <option value="966">Arábia Saudita</option>
                <option value="65">Singapura</option>
                <option value="27">África do Sul</option>
                <option value="34">Espanha</option>
                <option value="94">Sri Lanka</option>
                <option value="46">Suécia</option>
                <option value="41">Suíça</option>
                <option value="886">Taiwan</option>
                <option value="66">Tailândia</option>
                <option value="90">Turquia</option>
                <option value="380">Ucrânia</option>
                <option value="971">Emirados Árabes Unidos</option>
                <option value="44">Reino Unido</option>
                <option value="598">Uruguai</option>
                <option value="998">Uzbequistão</option>
                <option value="58">Venezuela</option>
                <option value="84">Vietnã</option>
        </select>
    );
}