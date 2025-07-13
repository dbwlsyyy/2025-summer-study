import './OrderForm.css';
import useInput from '../../hooks/useInput';

// git commit -m "week2: useInput hook 구현"
function OrderForm({ totalAmount, dispatch, orderForm, onClose }) {
    const paymentMethod = ['카드', '계좌이체', '카카오페이', '네이버페이'];
    // const [form, setForm] = useState({
    //     name: '',
    //     address: '',
    //     email: '',
    //     method: '',
    // });

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setForm((prev) => ({
    //         ...prev,
    //         [name]: value,
    //     }));
    // };

    const nameInput = useInput('');
    const addressInput = useInput('');
    const emailInput = useInput('');
    const methodInput = useInput('');

    const form = {
        name: nameInput.value,
        address: addressInput.value,
        email: emailInput.value,
        method: methodInput.value,
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: 'update-order', payload: form });
    };
    return (
        <div className="order-form-container">
            <h2>결제 정보 입력</h2>
            <form className="payment-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">이름</label>
                    <input
                        required
                        type="text"
                        id="name"
                        name="name"
                        placeholder="이름을 입력하세요"
                        {...nameInput}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="address">주소</label>
                    <input
                        required
                        type="text"
                        id="address"
                        name="address"
                        placeholder="주소를 입력하세요"
                        {...addressInput}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">이메일</label>
                    <input
                        required
                        type="email"
                        id="email"
                        name="email"
                        placeholder="이메일을 입력하세요"
                        {...emailInput}
                    />
                </div>
                <div className="form-group">
                    <label>결제수단</label>
                    {paymentMethod.map((method) => (
                        <label key={method}>
                            <input
                                required
                                type="radio"
                                name="method"
                                checked={methodInput.value === method}  
                                {...methodInput}
                            />
                            {method}
                        </label>
                    ))}
                </div>
                <div className="payment-info">
                    <h3>
                        <strong>결제 정보</strong>
                    </h3>
                    <p>
                        - 결제 금액:{' '}
                        <span>{totalAmount.toLocaleString()}원</span>
                    </p>
                    <p>
                        - 결제 수단: <span>{form.method || '선택 안됨'}</span>
                    </p>
                </div>
                <button type="submit" className="submit-payment-button">
                    결제하기
                </button>
            </form>
            <button
                onClick={onClose}
                disabled={Object.keys(orderForm).length === 0}
                className={`payment-status-message ${
                    Object.keys(orderForm).length !== 0 ? 'success' : ''
                }`}
            >
                {Object.keys(orderForm).length === 0
                    ? '결제 대기 중...'
                    : '결제가 완료되었습니다!'}
            </button>
        </div>
    );
}

export default OrderForm;
