var ThisCalc  = document.Calculation; //��������� ������, � ������� ���� ��������
var CurResult = 0; //������ ������� ��������� ���������
var IsNewNumFlag = false; //��������� �������� ����� ����� ��� ���
var OperPending = "";// ������ ������� ������� ��������
 
//������� ������������ ������ � �������
function PressedNum (Num) 
{
		if (IsNewNumFlag)//���� ���� ������ �����, �.�. ������ ��� �����
		{
			ThisCalc.ReadOut.value = Num;
			IsNewNumFlag = false;
		}	
		else {//���� �� �����
			if (ThisCalc.ReadOut.value == "0")//���� ��� ����� � ����� 0
//�� �������� ��� �� ����� �����
				ThisCalc.ReadOut.value = Num;
			else
//����� ���������� �����
				ThisCalc.ReadOut.value += Num;
		}
}
 
//������� ������������ ������ � ��������������� ����������
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
 
 
// ������� ������� �����
function ClearEntry () 
{
		ThisCalc.ReadOut.value = "0";
		IsNewNumFlag = true;
}
 
// ����� ���� ���������� ������������
function Clear () 
{
		Currents = 0;
		OperPending = "";
		ClearEntry();
}