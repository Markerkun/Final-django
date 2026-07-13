from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Task
from .serializers import TaskSerializer


class TaskViewSet(viewsets.ModelViewSet):
    """ViewSet for Task CRUD operations"""
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

    @action(detail=False, methods=['get'])
    def stats(self, request):
        """Get task statistics"""
        total = Task.objects.count()
        completed = Task.objects.filter(completed=True).count()
        pending = total - completed

        return Response({
            'total': total,
            'completed': completed,
            'pending': pending,
        })

    @action(detail=True, methods=['post'])
    def toggle_completion(self, request, pk=None):
        """Toggle task completion status"""
        task = self.get_object()
        task.completed = not task.completed
        task.save()
        serializer = self.get_serializer(task)
        return Response(serializer.data)
