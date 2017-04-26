var ThisCalc  = document.Calculation; //ќпредел€ю объект, с которым буду работать
var CurResult = 0; //хранит текущий численный результат
var IsNewNumFlag = false; //определ€ю вводитс€ новое число или нет
var OperPending = "";// хранит текущее нажатое значение
 
//функци€ обрабатывает кнопки с цифрами
function PressedNum (Num) 
{
		if (IsNewNumFlag)//если ввод нового числа, т.е. первой его цифры
		{
			ThisCalc.ReadOut.value = Num;
			IsNewNumFlag = false;
		}	
		else {//если не новое
			if (ThisCalc.ReadOut.value == "0")//если был сброс и стоит 0
//то замен€ем его на новую цифру
				ThisCalc.ReadOut.value = Num;
			else
//иначе дописываем цифры
				ThisCalc.ReadOut.value += Num;
		}
}
 
//функци€ обрабатывает кнопки с арифметическими операци€ми
function Operations (Op) 
{
		var Readout = ThisCalc.ReadOut.value;
		if (IsNewNumFlag && OperPending != "=")
		{
			ThisCalc.ReadOut.value = CurResult;
		}
		else
		{
			IsNewNumFlag = true;
			if ( '+' == OperPending )
				CurResult += parseFloat(Readout);
			else if ( '-' == OperPending )
				CurResult -= parseFloat(Readout);
			else if ( '/' == OperPending )
				CurResult /= parseFloat(Readout);
			else if ( '*' == OperPending )
				CurResult *= parseFloat(Readout);
			else
				CurResult = parseFloat(Readout);
			ThisCalc.ReadOut.value = CurResult;
			OperPending = Op;
		}
}
 
 
// ќчистка текущей цифры
function ClearEntry () 
{
		ThisCalc.ReadOut.value = "0";
		IsNewNumFlag = true;
}
 
// —брос всех параметров калькул€тора
function Clear () 
{
		Currents = 0;
		OperPending = "";
		ClearEntry();
}