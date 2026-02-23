package com.fsad.tribalcraft.service;

import com.fsad.tribalcraft.dto.OrderRequest;
import com.fsad.tribalcraft.model.CustomerOrder;
import com.fsad.tribalcraft.model.Product;
import com.fsad.tribalcraft.repository.CustomerOrderRepository;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;

@Service
public class OrderService {

    private final CustomerOrderRepository orderRepository;
    private final ProductService productService;

    public OrderService(CustomerOrderRepository orderRepository, ProductService productService) {
        this.orderRepository = orderRepository;
        this.productService = productService;
    }

    public CustomerOrder placeOrder(OrderRequest request) {
        Product product = productService.findById(request.getProductId());

        CustomerOrder order = new CustomerOrder();
        order.setCustomerName(request.getCustomerName());
        order.setCustomerEmail(request.getCustomerEmail());
        order.setProduct(product);
        order.setQuantity(request.getQuantity());

        BigDecimal total = product.getPrice().multiply(BigDecimal.valueOf(request.getQuantity()));
        order.setTotalAmount(total);

        return orderRepository.save(order);
    }

    public List<CustomerOrder> allOrders() {
        return orderRepository.findAll();
    }
}
