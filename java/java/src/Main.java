

public class Main{
    public static void main(String[] args) {

        Collection mixer = new Collection<>(true);
        mixer.print();

        // new Collection<>(0).print();

//        new Collection<>("ㅁㄴㅇㄹ").print();

//        Printer printer = new Printer();
//
//        printer.print("문자");
//
//        printer.print(1);

//        B a = new A();
//        B b = new D();
//        B c = new B();
//
//        System.out.println(a.getX()); // 6
//        System.out.println(b.getX()); // 21
//        System.out.println(c.getX()); // 6

//        System.out.println(a.getX() + a.x + b.getX() + b.x);

    }

    public static class Collection<T> {
        T value;

        public Collection(T t){
            value = t;
        }

        public void print () {

            System.out.println(value);


            new Printer().print(value);
        }

    }
}




class Printer{

    void print(Integer a){
        System.out.println(a);
    }

    void print(String a){
        System.out.println(a);
    }

    void print(Object a){



        System.out.println("test" + a);

    }
}

class A extends B{

    int y = 11;

    int getY () {
        return y * 2;
    }
}

// class B => class D (형변환)

class B {
    int x = 3;
    int getX () {
        return x * 2;
    }
}

class D extends B {

    int x = 7;

//    int getX () {
//        return x * 3;
//    }

}