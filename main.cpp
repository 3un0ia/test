#include <iostream>
using namespace std;

int main()
{
	cout << "this is program A" << endl;
	Exit();
	return 0;
}

void Exit()
{
	cin >> x;
	if (x == "exit")
		exit(0);
}